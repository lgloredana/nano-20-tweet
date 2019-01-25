import React, { Compoenent } from 'react'
import connect from "react-redux/es/connect/connect";

class Menu extends Component {
    render() {
        return (
            <div>Menu</div>
        )
    }
}

export default connect()(Menu);