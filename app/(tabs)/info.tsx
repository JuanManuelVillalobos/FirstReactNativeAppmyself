import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemedText} from "@/components/themed-text";

const Nombre = () => <ThemedText style={styles.text}>Nombre: Juan Manuel Villalobos Nuño</ThemedText>;
const Matricula = () => <ThemedText style={styles.text}>Matrícula: A01639125</ThemedText>;
const Carrera = () => <ThemedText style={styles.text}>Carrera: Ingeniería en Tecnologías Computacionales</ThemedText>;
const InfoExtra = () => (
    <>
        <ThemedText style={styles.text}>Hobbies: Nadar, programar y conversar.</ThemedText>
        <ThemedText style={styles.text}>Último viaje: Viaje a Europa el verano de 2025</ThemedText>
        <ThemedText style={styles.text}>Número de personas en mi familia: 4</ThemedText>
    </>
);

export default function Info() {
    return (
        <View style={styles.container}>
            <Nombre/>
            <Matricula/>
            <Carrera/>
            <InfoExtra/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
});
