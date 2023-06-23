import { React, useState } from 'react';
import { TextInput,View ,Text, StyleSheet, Button } from 'react-native';

export default function  AddTodo({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler = (value)=>{
        setText(value);
    }
    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholder='new todo ...'
                onChangeText={(val)=>changeHandler(val)}
            />
            <Button onPress={()=> submitHandler(text)} title='Add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})