import GridLayout from "react-grid-layout";
import {GRID_CONFIG} from "../../../shared/config";


export const DashboardPage = () => {
    return <GridLayout className="layout" {...GRID_CONFIG}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
            a
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
            b
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
            c
        </div>
    </GridLayout>
}
