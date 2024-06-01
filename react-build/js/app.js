function Element(porps) {
  return /*#__PURE__*/React.createElement("p", null, props.content);
}
ReactDOM.render( /*#__PURE__*/React.createElement(Element, {
  content: "Hello React-Build"
}), document.getElementById("app"));