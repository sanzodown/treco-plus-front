import {useViewerQuery, ViewerQueryVariables, ViewerQueryViewer} from "../graphql/components";
import {QueryHookOptions} from "react-apollo-hooks";

type Options = Exclude<QueryHookOptions<ViewerQueryVariables>, 'fetchPolicy'>

const useViewer = (options?: Options): ViewerQueryViewer | null => {
  const {data, error, loading} = useViewerQuery({
    ...options,
    fetchPolicy: "cache-first"
  })

  if (error || loading) return null

  if(data && data.viewer) {
    return data.viewer
  }

  return null
}

export default useViewer
