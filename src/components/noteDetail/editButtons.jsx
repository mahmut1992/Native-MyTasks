import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppColors } from '../../theme/color'
import { TextBold,TextItalic ,TextUnderline,TextalignJustifyleft,TextalignJustifycenter,TextalignRight} from 'iconsax-react-native'


const EditButtons = ({onChangeStyle}) => {
    const Buttons=[
        {
           id:1,
           value:"bold",
           icon:<TextBold size="32" color={AppColors.SECONDARY}/>
        },
        {
            id:2,
            value:"italik",
            icon:<TextItalic size="32" color={AppColors.SECONDARY}/>
         },
         {
            id:3,
            value:"TextUnderline",
            icon:<TextUnderline size="32" color={AppColors.SECONDARY}/>
         },
         {
            id:4,
            value:"left",
            icon:<TextalignJustifyleft size="32" color={AppColors.SECONDARY}/>
         },
         {
            id:5,
            value:"center",
            icon:<TextalignJustifycenter size="32" color={AppColors.SECONDARY}/>
         },
         {
            id:6,
            value:"right",
            icon:<TextalignRight size="32" color={AppColors.SECONDARY}/>
         },
    ]
  return (
    <View style={styles.container} >
    {Buttons.map((item,index)=>(
        <TouchableOpacity 
        onPress={()=>onChangeStyle(item.value)}
        key={index} >
            {item.icon}
        </TouchableOpacity>
    ))}
    </View>
  )
}

export default EditButtons

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.GRAY,
        flexDirection:"row",
        padding:5,
        paddingVertical:10,
        justifyContent:"space-around",
        
    }
})