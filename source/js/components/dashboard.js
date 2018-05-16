import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { lazyLoad : <div className="lazy">Not loaded</div> };
      }
    
      async componentDidMount() {
        try {
            let y = 'dynamiccomponent';
          const lazycomp = await import('./'+y);
          this.setState({lazyLoad: React.createElement(lazycomp.default)});
        }
        catch(err) {
          this.setState({lazyLoad:<div>{'failed to load: ${err}'}</div>});
        }
      }
    render () {
        return (
            <div> dashboard 
                {this.state.lazyLoad}
            </div>
        );
    }
}