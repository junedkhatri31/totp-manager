import fragments from "./fragments";

function FragmentContainer(props) {
    const ComponentToRender = fragments[props.activePage]
    return (
        <ComponentToRender></ComponentToRender>
    )
}

export default FragmentContainer;
