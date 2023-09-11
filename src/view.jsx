export default function View({info}){
      const {userId, title} = info
      const styl = {
        backgroundColor: 'aqua',
        border: '2px solid black',
        borderRadius: '10px',
        textAlign: 'start',
        margin: '5px',
        
    }
    return(
        <div style={styl}>
            <h3>UserID: {userId} </h3>
            <h3>Title: {title} </h3>
        </div>
    )
}

