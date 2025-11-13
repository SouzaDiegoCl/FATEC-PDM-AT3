//import * as WebBrowser from 'expo-web-browser';
import {Button, FlatList, ListRenderItem, StyleSheet, Text, View} from "react-native"
import {Image} from "expo-image";


interface Pizzaria {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: string;
}

const onClick = () => {
    alert("Adicionando...")
}

export default function Index() {

    const pizzarias_data: Pizzaria[] = [
        {
            id: 1,
            nome: "Margherita",
            descricao: "Molho de tomate, mussarela, manjericão fresco e azeite de oliva.",
            valor: 39.90,
            imagem: "https://plus.unsplash.com/premium_photo-1673439306780-2b457e65da70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            nome: "Calabresa",
            descricao: "Mussarela, calabresa fatiada, cebola roxa e orégano.",
            valor: 42.00,
            imagem: "https://media.istockphoto.com/id/1276765965/pt/foto/tasty-pizza-and-ingredients-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=h4xE4Y0D4NvYRkdl7pwIj_ncUJUynPqPPN15uPurfdg=",
        },
        {
            id: 3,
            nome: "Frango com Catupiry",
            descricao: "Frango desfiado, catupiry original e milho verde.",
            valor: 45.50,
            imagem: "https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        },
        {
            id: 4,
            nome: "Portuguesa",
            descricao: "Presunto, ovos, cebola, ervilha, azeitona e mussarela.",
            valor: 44.00,
            imagem: "https://images.unsplash.com/photo-1559978137-8c560d91e9e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
        },
        {
            id: 5,
            nome: "Quatro Queijos",
            descricao: "Mussarela, provolone, parmesão e gorgonzola.",
            valor: 46.90,
            imagem: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
        },
        {
            id: 6,
            nome: "Pepperoni",
            descricao: "Molho de tomate, pepperoni, queijo mussarela e orégano.",
            valor: 49.90,
            imagem: "https://images.unsplash.com/photo-1689793606720-be22e34c9322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
        },
        {
            id: 7,
            nome: "Vegetariana",
            descricao: "Brócolis, palmito, pimentão, cebola, tomate e azeitonas.",
            valor: 43.00,
            imagem: "https://images.unsplash.com/photo-1595378833389-86cc60210926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
        },
        {
            id: 8,
            nome: "Bacon com Cheddar",
            descricao: "Mussarela, bacon crocante e creme de cheddar.",
            valor: 48.00,
            imagem: "https://plus.unsplash.com/premium_photo-1675103910740-533375dd3864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
        },
        {
            id: 9,
            nome: "Napolitana",
            descricao: "Molho de tomate, mussarela, rodelas de tomate e orégano.",
            valor: 40.00,
            imagem: "https://images.unsplash.com/photo-1655471264223-b07ce84d521c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
        },
        {
            id: 10,
            nome: "Chocolate com Morango",
            descricao: "Chocolate derretido e morangos frescos.",
            valor: 47.00,
            imagem: "https://plus.unsplash.com/premium_photo-1664472735403-77644019b02e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
        }
    ]

    const render_list_item: ListRenderItem<Pizzaria> = ({item}) => {
        return (
            <View style={styles.card}>
                {/* CARD HEADER */}
                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 24,
                }}>

                    <Image source={item.imagem} style={{width: 100, height: 100, borderRadius: 20}}/>
                    <View style={{flexShrink: 1}}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "000",
                            marginBottom: 4,
                            flexWrap: "wrap",
                        }}>
                            {item.nome}
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: "000",
                            marginBottom: 4,
                            flexWrap: "wrap",
                        }}>
                            {item.descricao}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: "#4e1b4e",
                        marginVertical: 8,
                    }}
                />
                <View>
                    <Button title={"Adicionar Item"} onPress={onClick}/>
                </View>
            </View>
        )
    }

    return (
        <>
            <Text style={{textAlign: "center", paddingVertical: 24, fontWeight: "bold", fontSize: 24}} >Lista de Pizza</Text>
            <View
                style={{
                    height: 1,
                    backgroundColor: "#4e1b4e",
                }}
            />
            <FlatList data={pizzarias_data} renderItem={render_list_item}
                      style={{paddingTop: 28, paddingBottom: 24}}/>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#3c77f5",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 24,
        marginVertical: 4,
    }
})