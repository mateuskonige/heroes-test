import { Card, CardMedia } from "@mui/material";
import useStore from '../../../store';

export default function HeroCard({ item }) {
    const { addHero } = useStore();

    return (
        <Card key={item.id} className={`hover:scale-105 shadow ${item.biography.alignment == 'good' ? 'bg-green-900' : 'bg-red-900'} text-gray-50 px-3 `}
            onClick={() => addHero(item)} >
            <p className='font-bold py-2'>{item.name}</p>
            <div className='relative'>
                <CardMedia className={`shadow ring ring-offset-2 ring-offset-gray-800 ring-yellow-300 ring-opacity-60`}
                    component="img"
                    height="194"
                    image={item.images.md}
                    alt={item.name}
                />
                <span className='absolute left-0 top-0 bg-orange-500 p-2 '>{item.powerstats.strength} <small>STR</small></span>
                <span className='absolute right-0 top-0 bg-teal-500 p-2 '>{item.powerstats.intelligence} <small>INT</small></span>
            </div>

            <div className='py-3'>

                <p className='text-gray-200'>{item.biography.publisher}</p>
            </div>
        </Card>
    )
}
