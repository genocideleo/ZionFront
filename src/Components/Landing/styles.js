import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    

    header:{
        height: '64px',
       paddingTop: '15px',
    },


    nav:{
        color: '#18191F',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: '600',
        '& ul':{
            padding: 0,
            width: '300px',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            '& li':{
                cursor: 'pointer',
            }
        },

        '& span': {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
        }
    },

    main: {
        margin: '0 auto',
        width: '80%',
    },

    title:{
        paddingTop: '50px',
        textAlign: 'center',

        '& p':{
            fontWeight: 'bolder',
            color: '#3F2F6A',
            fontSize: '34px',
            margin: '10px 0',
        }
        
    },

    platform:{
        color: '#FF6B6B',
    },

    expose:{
        color: '#7768F2',
    },

    titleButton:{
        marginTop: '30px',

        '& button':{
            boxSizing: 'border-box',
            margin: '0 5px',
            height: '48px',
            width: '130px',
            borderRadius: '48px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1px',
            fontFamily: 'Gilroy-Bold, sans-serif',
            lineHeight: '20px',
            cursor: 'pointer',
            '& span':{
                margin: '0 auto',
                width: '60%',
                display: 'flex',
                justifyContent: 'space-around',

                '& svg': {
       
                    height: '20px',
                    width: '20px',
                }
            }
        }
    },

    button1:{
        border: 0,
        color: '#FFF',
        backgroundColor: '#7768F2',
    },

    button2:{
        color: '#7768F2',
        backgroundColor: '#FFF',
        border: '2px solid #7768F2',
    }



  });

export default useStyles;