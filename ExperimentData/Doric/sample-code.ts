import { Group, Panel, stack, layoutConfig, vlayout, hlayout, Color, scroller, modal, Stack } from "doric";

let rowIndex = -1
let index = -1

@Entry
class SimpleDemo extends Panel {

    private target?: Stack

    build(rootView: Group) {
        const range = (start: number, end: number) => Array.from({ length: (end - start) }, (v, k) => k + start)
        let rows = range(0, 500).map(() => {

            rowIndex ++

            let columns = range(0, 10).map(() => {
                let id = index++

                if (index == 500) {
                    return this.target = stack([], {
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.GREEN,
                        width: (Environment.screenWidth - 45) / 10,
                        height: (Environment.screenWidth - 45) / 10,
                        onClick: () => {
                            modal(context).toast("====" + id + "====")
                            this.target!!.backgroundColor = Color.RED
                        }
                    })
                } else {
                    return stack([], {
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED,
                        width: (Environment.screenWidth - 45) / 10,
                        height: (Environment.screenWidth - 45) / 10,
                    })
                }
            })
            return hlayout(columns, { space: 5 })
        })


        scroller(
            vlayout(rows, {
                space: 5,
            })
        ).in(rootView)
    }
}