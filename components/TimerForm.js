import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimmerButton from './TimerButton';

export default function TimerForm({ id, title, project }) {
    const submitText = id ? 'Update' : 'Create';
    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.TextInput}
                        underlineColorAndroid='transparent'
                        value={title} />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputContainer}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.TextInput}
                        underlineColorAndroid='transparent'
                        value={project} />

                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimmerButton small color='#21BA45' title='Start' />
                <TimmerButton small color='#DB2828' title='Cancel' />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5
    },
    TextInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})