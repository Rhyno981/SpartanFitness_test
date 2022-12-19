import { StyleSheet, Text, Pressable, View, ScrollView, Image, Alert, Dimensions } from 'react-native';

export default function App(props) {
  const { title = 'CHECKOUT' } = props;
  return (
    <ScrollView style={{width:'100%'}}>
      <View style={[styles.container, {width:'100%', height:130}]}>
        <Text style={styles.header1}>CART</Text>
      </View>
      <View style={styles.container2}>
        <Row>
          <Col numRows={2}>
            <Image 
              style={styles.image}
              source={require('./images/designn1.png')}
            />
          </Col>
          <Col numRows={2}>
            <Text style={styles.text1}>University Hoodie</Text>
            <Text style={styles.text2}>Size: L</Text>
            <Text style={styles.text2}>$56.00 USD</Text>
            <Text style={styles.text3}>Qty: 1</Text>
          </Col>
        </Row>
        </View>
        <View styles={styles.container3}>
        <Pressable style={[styles.button, {width:'100%'}]} onPress={() => Alert.alert("You're Broke Biatch")}>
          <Text style={styles.text12}>{title}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#c89686',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
  },

  button: {
    marginTop:370,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#c89686',
    shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
  },

  text12: {
    fontSize: 19,
    textAlign:'center',
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
  },

  image: {
    marginTop:25,
    marginLeft:17,
    width:170,
    height:170,
    marginBottom:25
  },

  container2: {
    flex:2,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
  },

  row: {
    flexDirection: "row"
  },

  "1col":  {
    flex:  1
  },
  "2col":  {
    flex:  2
  },

  header1: {
    textAlign:'center',
    fontSize:30,
    letterSpacing:9,
    fontWeight:'bold',
    color:'#fff',
    height: 30,
    marginTop: 20,
  },

  header2: {
    textAlign:'center',
    fontSize:14,
    letterSpacing:9,
    fontWeight:'700',
  },

  text1: {
    fontSize:18,
    fontWeight:'600',
    marginTop:21,
  },

  text2: {
    fontSize:16,
    marginTop:8,
  },

  text3: {
    fontSize:18,
    marginTop:75,
  }
});
