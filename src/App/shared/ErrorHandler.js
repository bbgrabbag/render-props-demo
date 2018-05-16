
function ErrorHandler(props) {
    const { err, render } = props;
    if (err.code) return render(err);
    return props.children;
}

export default ErrorHandler;
