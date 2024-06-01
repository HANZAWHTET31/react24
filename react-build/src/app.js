function Element(props){
      return (
            <p>{props.content}</p>
      )
}

ReactDOM.render(
      <Element content="Hello React-Build" />,
      document.getElementById("app")
)