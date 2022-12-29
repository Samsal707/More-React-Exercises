
class PropsDisplayer extends React.Component {

    render(){
    const stringPorops = JSON.stringify(this.props);

    return(
        <div>
          <h1>CHECK OUT MY PROPS OBJECT</h1>
          <h2>{stringPorops}</h2>
        </div>
    );
}
}

