import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      bgimg: {
        marginTop: 20,  
         height:335,
         width: 415,
         marginHorizontal: 2
      },
      txtinput: {
          height: 50,
          width: 320,
          borderBottomEndRadius: 1,
          borderBottomWidth: 1,
          borderBottomColor: "#969595",
          marginBottom: 20,
          fontSize: 18
      },
      modalinut:{
        height: 50,
        width: 320,
        borderBottomEndRadius: 5,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        marginTop: 5,
        borderBottomColor: "#969595",
        marginBottom: 20,
        fontSize: 18
      },
      iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
        borderBottomColor: "red",
      },
      emailcon: {
        height: 50,
        width: 360,
        borderRadius: 5,
        borderBottomEndRadius: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        marginHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 20
      },
      btn: {
        borderRadius: 8,
        backgroundColor: "#03C0C1",
        height: 50,
        width: 320,
        marginHorizontal: 50,
        fontSize: 18,
        paddingTop: 10,
        textAlign: 'center',
        marginTop: 10
      },
      btmcontainer: {
        marginHorizontal: 30,
      },
      register: {
        color: 'blue',
      },
      modalbtn: {
      fontSize: 20, 
      fontWeight: 'bold', 
      color: '#00868B', 
      marginTop: 40, 
      marginLeft: 30
    },
      error: {
        fontSize: 15,
        color: 'red',
        marginHorizontal:30,
       marginTop: -10
      },
      wlcmContainer: {
        flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
     },
     hdertxt: {
       fontSize: 24,
       fontWeight: 'bold',
       marginBottom: 15,
     },
     nametxt: {
       fontSize: 18,
       marginBottom: 15,
     },
     wlcmBtn: {
       borderRadius: 8,
       backgroundColor: "#ADD8E6",
       marginTop: 30,
       height: 50,
       width: 320,
       marginHorizontal: 50,
       fontSize: 18,
       paddingTop: 10,
       textAlign: 'center'
     },
     emltxt: {
         fontSize: 18, 
         marginTop: 15,
          marginHorizontal: 15
        },
    passTxt: {
        fontSize: 18, 
        marginHorizontal: 20
    }
});