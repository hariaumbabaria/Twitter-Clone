
import './Sidebaroption.css';
import { Box } from "@material-ui/core";

const SidebarOption = ({active,text,Icon}) => {
    return (
        <Box className={`sideroption  ${active && 'sidebaroptions__active' }`} >
            <Icon/>
            <h2>{text}</h2>
        </Box>
    )
}

export default SidebarOption;