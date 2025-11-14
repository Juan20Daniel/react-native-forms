import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Nombre" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Correo" style={{ marginBottom: 20, borderWidth: 1 }} />
        <TextInput placeholder="Contraseña" style={{ marginBottom: 20, borderWidth: 1 }} />
        {/* Más inputs */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}