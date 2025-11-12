//import * as WebBrowser from 'expo-web-browser';
import {FlatList, ListRenderItem, Text, View} from "react-native"
import {Image} from "expo-image";


interface Pizzaria {
    id: number;
    nome: string;
    descricao: string;
        valor: number;
    imagem: string;
}

export default function Index() {

    const pizzarias_data: Pizzaria[] = [
        {
            id: 1,
            nome: "Margherita",
            descricao: "Molho de tomate, mussarela, manjericão fresco e azeite de oliva.",
            valor: 39.90,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/89e3c536-9a44-4b36-a6d7-e9b45b5c21a8/202012021046_Gk6s_.jpeg",
        },
        {
            id: 2,
            nome: "Calabresa",
            descricao: "Mussarela, calabresa fatiada, cebola roxa e orégano.",
            valor: 42.00,
            imagem: "https://cdn.deliway.com.br/blog/base/09a/7b0/2dc/pizza-de-calabresa.jpg",
        },
        {
            id: 3,
            nome: "Frango com Catupiry",
            descricao: "Frango desfiado, catupiry original e milho verde.",
            valor: 45.50,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-frango-com-catupiry-1.jpg",
        },
        {
            id: 4,
            nome: "Portuguesa",
            descricao: "Presunto, ovos, cebola, ervilha, azeitona e mussarela.",
            valor: 44.00,
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/62bff7f9aeb6138ad13b532d8b4a6f38_XL.jpg",
        },
        {
            id: 5,
            nome: "Quatro Queijos",
            descricao: "Mussarela, provolone, parmesão e gorgonzola.",
            valor: 46.90,
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/f4a21c04a42a671d289c68b61c484bb3_XL.jpg",
        },
        {
            id: 6,
            nome: "Pepperoni",
            descricao: "Molho de tomate, pepperoni, queijo mussarela e orégano.",
            valor: 49.90,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-pepperoni-01.jpg",
        },
        {
            id: 7,
            nome: "Vegetariana",
            descricao: "Brócolis, palmito, pimentão, cebola, tomate e azeitonas.",
            valor: 43.00,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-vegetariana.jpg",
        },
        {
            id: 8,
            nome: "Bacon com Cheddar",
            descricao: "Mussarela, bacon crocante e creme de cheddar.",
            valor: 48.00,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-bacon-com-cheddar-01.jpg",
        },
        {
            id: 9,
            nome: "Napolitana",
            descricao: "Molho de tomate, mussarela, rodelas de tomate e orégano.",
            valor: 40.00,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-napolitana-01.jpg",
        },
        {
            id: 10,
            nome: "Chocolate com Morango",
            descricao: "Chocolate derretido e morangos frescos.",
            valor: 47.00,
            imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-chocolate-com-morango-01.jpg",
        }
    ]

    const render_list_item: ListRenderItem<Pizzaria> = ({item}) => {
        return (
            <View>
                {/* CARD HEADER */}
                <View>
                    <Image source={item.imagem}/>
                </View>
                {/* CARD BODY */}
                <View>
                    <Text>
                        {item.nome}
                    </Text>
                    <hr/>
                    <Text>
                        {item.descricao}
                    </Text>
                </View>
                {/* CARD FOOTER */}
                <View>

                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList data={pizzarias_data} renderItem={render_list_item}/>
        </View>
    )
}