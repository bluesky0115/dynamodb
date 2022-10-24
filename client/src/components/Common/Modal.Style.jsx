export const ModalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex:'10',
        backgroundColor: 'rgb(0 0 0 / 50%)',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    content: {
        position:'relative',
        maxHeight : '100vh',
        margin: '0px auto 0px auto',
        maxWidth: '100vw',
        background:'transparent',
        padding:'0px',
        borderRadius:'0',
        border:'none',
        overflow:'hidden',
        inset: '0px 0px 0px 0px'
    },
};