import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(product)}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#FFFFFF',  // Fundo branco para um visual clean
    padding: 20,  // Maior padding para dar mais espaço
    margin: 12,  // Margem maior para separar os cards
    borderRadius: 12,  // Bordas arredondadas para suavizar o visual
    alignItems: 'center',
    width: 170,  // Tamanho do card maior
    overflow: 'hidden',
    shadowColor: '#000',  // Sombra suave
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },  // Efeito de sombra suave
  },
  imageContainer: {
    width: 150,  // Aumentando o tamanho da imagem
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2F0E7',  // Verde água suave para a área da imagem
    borderRadius: 8,  // Bordas arredondadas para a imagem
    overflow: 'hidden',
  },
  image: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',  // Melhor cobertura da área
  },
  title: { 
    color: '#333',  // Título em um tom de cinza escuro para contraste com o fundo branco
    fontSize: 16,  // Aumentando o tamanho da fonte para maior destaque
    fontWeight: '600',  // Peso médio da fonte para destacar o título
    marginVertical: 8,  // Maior margem para um espaçamento mais agradável
    textAlign: 'center',
  },
  price: { 
    color: '#00BFAE',  // Verde água vibrante para o preço
    fontSize: 16,  // Tamanho de fonte aumentado para maior destaque
    fontWeight: 'bold',  // Preço em negrito para chamar atenção
  },
  button: { 
    backgroundColor: '#00BFAE',  // Verde água vibrante para o botão
    padding: 12,  // Maior padding para o botão
    borderRadius: 8,  // Bordas arredondadas para o botão
    marginTop: 15,  // Maior margem para separar o botão do conteúdo
    width: '100%', 
  },
  buttonText: { 
    color: '#FFF',  // Texto do botão em branco para contraste
    fontWeight: 'bold', 
    textAlign: 'center',
    fontSize: 16,  // Fonte maior para maior legibilidade
  }
});


export default ProductCard;