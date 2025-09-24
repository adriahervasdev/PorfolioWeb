import { getCollection } from 'astro:content'
import { CATEGORIES_NAMES } from '@/consts.ts'

export const getCategories = async () => {
    const posts = await getCollection('posts');

    const categories = new Set<string>(); // Especificamos el tipo del Set como 'string'

    posts
        .filter((post) => !post.data.draft) // Filtramos los borradores primero
        .forEach((post) => {
            // Aseguramos que 'post.data.categories' existe y es un array
            if (post.data.categories && Array.isArray(post.data.categories)) {
                post.data.categories.forEach((category) => {
                    categories.add(category); // Añadimos cada categoría individual al Set
                });
            }
        });

    return Array.from(categories); // Convertimos el Set a un Array
}

export const getPostsByCategory = async (activeCategory:string, lang:string) => {
	type CategoryName = typeof CATEGORIES_NAMES[number];
	const PostsByCategory = (await getCollection("posts"))
	.filter(post => post.id.startsWith(lang))
	.filter((post) => post.data.categories.includes(activeCategory as CategoryName))
	.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
	
	return PostsByCategory;
}

export const getAllPosts = async () => {
	const AllPosts = (await getCollection("posts"))
	.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
	
	return AllPosts;
}