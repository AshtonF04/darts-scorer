import { useState } from "react";
import PlayerAddCard from "../components/PlayerAddCard";

const Home = () => {
    
    const MAXPLAYERS = 6

    const [gameType, setGameType] = useState('501')
    const [players, setPlayers] = useState(['Player One', 'Player Two'])
    const [newPlayer, setNewPlayer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newPlayer == ''){
            console.log('Invalid player.')
            return
        } else if (players.length >= MAXPLAYERS){
            console.log('Max players reached.')
            return
        } else if (players.includes(newPlayer)) {
            console.log('Player already exists')
            return
        }
        
        setPlayers([...players, newPlayer])
        setNewPlayer('')
    }

    return (  
        <div className="grid grid-cols-3 h-screen">
            <div className="my-auto mx-auto col-start-2 h-4/5 w-4/5 p-4 bg-white rounded-lg shadow-xl relative">
                <h2 className="font-bold text-xl mx-auto w-fit">New Game</h2>

                <p>Game type:</p>
                <div className="flex justify-around mt-2 gap-4 p-2 bg-slate-200 rounded-lg shadow-md">
                    <button onClick={() => {setGameType('101')}} className={`py-1 px-3 rounded-lg ${(gameType == '101' ? 'bg-blue-300 text-white' : 'bg-white')}`}>101</button>
                    <button onClick={() => {setGameType('301')}} className={`py-1 px-3 rounded-lg ${(gameType == '301' ? 'bg-blue-300 text-white' : 'bg-white')}`}>301</button>
                    <button onClick={() => {setGameType('501')}} className={`py-1 px-3 rounded-lg ${(gameType == '501' ? 'bg-blue-300 text-white' : 'bg-white')}`}>501</button>
                    <button onClick={() => {setGameType('701')}} className={`py-1 px-3 rounded-lg ${(gameType == '701' ? 'bg-blue-300 text-white' : 'bg-white')}`}>701</button>
                    <button onClick={() => {setGameType('1001')}} className={`py-1 px-3 rounded-lg ${(gameType == '1001' ? 'bg-blue-300 text-white' : 'bg-white')}`}>1001</button>
                </div>

                <p className="mt-4">Players:</p>
                <div className="mt-2 flex flex-col gap-2">
                    {players && players.map((player) => (
                        <PlayerAddCard player={player} setPlayers={setPlayers} players={players} />
                    ))}
                </div>

                {(players.length < MAXPLAYERS) && (
                    <form onSubmit={handleSubmit} className="bg-slate-200 rounded-lg flex flex-col gap-2 p-2 mt-2">
                        <p className="font-bold">New Player</p>
                        <input onChange={(e) => setNewPlayer(e.target.value)} value={newPlayer} className="rounded-lg w-full p-1"></input>
                    </form>
                )}

                <div className="flex justify-center absolute bottom-8 left-1/3 right-1/3">
                    <button className="bg-green-400 rounded-lg shadow-lg px-24 py-2">START</button>
                </div>
                
            </div>
        </div>
    );
}
 
export default Home;