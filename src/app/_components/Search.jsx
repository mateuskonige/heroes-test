import { TextField } from "@mui/material";
import useStore from "../../../store";

export default function Search() {
    const { search, setSearch } = useStore();

    return (
        <TextField
            type="search"
            color="success"
            variant="filled"
            label="Search for a specific hero here!"
            value={search}
            className='w-full mb-4'
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}