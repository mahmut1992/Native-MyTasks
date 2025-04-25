import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FolderConnection,Share ,More} from 'iconsax-react-native'
import { AppColors } from '../../theme/color'


const HeaderRight = () => {
  return (
    <View style={styles.container} >
      <FolderConnection style={styles.icon} size="24" color={AppColors.SECONDARY}/>
      <Share style={styles.icon} size="24" color={AppColors.SECONDARY}/>
      <More style={styles.icon} size="24" color={AppColors.SECONDARY}/>
    </View>
  )
}

export default HeaderRight

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
       },
    icon:{
        marginHorizontal:5,
    }
})