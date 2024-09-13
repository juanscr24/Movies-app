import { useRouter } from 'expo-router'
import { FC } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'

export const MoviePoster: FC<{
    movie: Movie,
    height?: number,
    width?: number
}> = ({ movie, height = 400, width = 300 }) => {
    const { navigate } = useRouter()
    return (
        <Pressable
            onPress={() => navigate("/details")}
            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 4,
                paddingBottom: 20,
                paddingHorizontal: 6,

                opacity: pressed ? 0.9 : 1
            })}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },

    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9
    }

})
