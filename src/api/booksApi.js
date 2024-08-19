import supabase from "@/utils/supabase";

export const getBooks = async () => {

    let { data: books, error } = await supabase.from('Books').select('*');

    if (error) {
        console.log(error);
        throw new Error("Error while getting list of books. Try again later.")
    }

    return books;

}