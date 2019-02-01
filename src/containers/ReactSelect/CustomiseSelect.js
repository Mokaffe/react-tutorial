import React from 'react'
import CustomiseOption from '../../components/react_select/CustomiseOption';

class CustomiseSelect extends React.Component {

    render() {
        return (
            <div>
                <h3><a href={'https://github.com/JedWatson/react-select'}>react-select v2</a></h3>
                <p>使用方式参照github repo readme</p>

                <hr/>
                <CustomiseOption/>
            </div>
        );
    }
}

export default CustomiseSelect;
