import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';


class UpdateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.location.state.detail.name,
            material: this.props.location.state.detail.material,
            weight: this.props.location.state.detail.weight,
            corrosion: this.props.location.state.detail.corrosion,
            size: this.props.location.state.detail.size,
            url: this.props.location.state.detail.department,
            id: this.props.location.state.detail.id
        }

    }


handleSubmit = async event => {
    event.preventDefault();
    // this.setState({ email: '', password: '' });
    console.log('The entered values are:')
    console.log(this.state.name);
    console.log(this.state.material);
    console.log(this.state.weight);
    console.log(this.state.corrosion);
    console.log(this.state.size);
    console.log(this.state.url);

    let bodydata = {
        name: this.state.name,
        material: this.state.material,
        weight: this.state.weight,
        corrosionfree: 'true',
        size: this.state.size,
        department: this.state.url

    }

    console.log(JSON.stringify(bodydata))

    const response = await fetch('http://localhost:5000/api/products', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        // body: JSON.stringify(bodydata)
        body: JSON.stringify(bodydata)
    
    })

    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(response)

};

handleChange = event => {
    const { value, name } = event.target;
    
    console.log(name + " " + value);
    
    this.setState({ [name]: value });
    console.log('After state change:');
    console.log(this.state.corrosion);
    console.log(this.state.size);
    

};

render(){
    console.log('rendering')
    console.log(this.props.location.state.detail)
    return (
        <div>
        <h1>Update Items</h1>
        <form onSubmit={this.handleSubmit}>
            <p>ID: {this.state.id}</p>
            <FormInput value={this.state.name} name='name' label='Product Name' handleChange={this.handleChange}/>
            <FormInput value={this.state.material} name='material' label='Material' handleChange={this.handleChange}/>
            <FormInput value={this.state.weight} name='weight' label='Weight' handleChange={this.handleChange}/>
            <FormSelect value={this.state.corrosion} name='corrosion' label='Corrosion Free' options={{ 'True': 'True', 'False': 'False' }} handleChange={this.handleChange} />
            <FormSelect value={this.state.size} name='size' label='size' options={{ 'Small': 'Small', 'Medium': 'Medium', 'Large': 'Large' }} handleChange={this.handleChange}/>
            <FormInput value={this.state.url} name='url' label='Picture URL' handleChange={this.handleChange}/>
            <CustomButton type='submit'>Push Update</CustomButton>

        </form>

    </div>

    )

}

}

export default UpdateItem;

