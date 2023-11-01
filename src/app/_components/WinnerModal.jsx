import { Box, Card, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import useStore from '../../../store';

export default function WinnerModal({ winner }) {

    const { modal, setModal, selectedHeros, clearSelectedHeroes } = useStore();

    const handleClose = () => {
        setModal(false)
        clearSelectedHeroes()
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <Modal
            open={modal}
            onClose={() => handleClose()}
        >
            <Box sx={style}>
                <div className='bg-gray-600  border-0 p-4 rounded'>
                    <h2 className='text-xl text-center text-gray-50 pb-4'>Winner: {winner}</h2>
                    <div className='flex space-x-4 justify-between'>
                        {selectedHeros.map((item) => (
                            <Card maxWidth={500} key={item.id} className={`shadow  ${item.biography.alignment == 'good' ? 'bg-green-900' : 'bg-red-900'} text-gray-50 px-3 `}>
                                <CardMedia
                                    component="img"
                                    height="320"
                                    image={item.images.md}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <ul className='text-white'>
                                            <li>Combat: {item.powerstats.combat} {item.powerstats.combat > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                            <li>Durability: {item.powerstats.durability} {item.powerstats.durability > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                            <li>Intelligence: {item.powerstats.intelligence} {item.powerstats.intelligence > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                            <li>Power: {item.powerstats.power} {item.powerstats.power > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                            <li>Speed: {item.powerstats.speed} {item.powerstats.speed > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                            <li>Strength: {item.powerstats.strength} {item.powerstats.strength > 50 ? <span className='bg-green-500 rounded-xl ml-2 px-2'></span> : <span className='bg-red-500 rounded-xl ml-2 px-2'></span>}</li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Box>
        </Modal>
    )
}