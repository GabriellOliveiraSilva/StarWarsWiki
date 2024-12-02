import React from "react";
import { View, StyleSheet } from "react-native";

// Componente Container que recebe children
export const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

// Definindo os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    container: {
        flex: 1,                // Isso faz com que o container ocupe toda a altura disponível
        justifyContent: 'center', // Opcional: alinha o conteúdo ao centro verticalmente
        alignItems: 'center',   // Opcional: alinha o conteúdo ao centro horizontalmente
        padding: 16,            // Opcional: adiciona preenchimento nas bordas
        backgroundColor: '#fff' // Opcional: define uma cor de fundo
    }
});
