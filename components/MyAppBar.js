import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

function MyAppBar({ navigation, back }) {

    return (
        <View style={style.container}>
            <Appbar.Header>
                {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                <Appbar.Content style={style.header} title="MD Nav Demo" />
                {!back ? <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} /> : null}
            </Appbar.Header>
        </View>
    );
}

const style = {
    header: {
        alignItems: 'left',
    },
};


export default MyAppBar;