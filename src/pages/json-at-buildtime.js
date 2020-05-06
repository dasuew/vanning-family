import React from "react"
import JSONData from "../../content/vanning_family.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.title}</h1>
    {console.log(JSONData)}
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_title_${index}`}>{data.title}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime