const PlayerAddCard = ({ player, setPlayers, players }) => {
    return (  
        <div className="border-4 border-slate-200 rounded-lg p-2 flex justify-between">
            <p className="">{player}</p>
            <button onClick={() => {setPlayers(players.filter((f_player) => f_player != player))}} className="text-white font-bold bg-red-300 py-0.5 px-2 rounded-md">X</button>
        </div>
    );
}
 
export default PlayerAddCard;