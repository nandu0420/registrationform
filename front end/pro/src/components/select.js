import React from 'react'

class Sdiv extends React.Component
{
    sc = {
        arr:['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
    }
    
    sd = {
        arr:['A','B','C']
    }

    render(){
        return(
            <div>
                <div>
                    <label for="class">Class</label>
                    <select class="form-control" id="c1">
                        {this.sc.arr.map(data => (
                            <option title={data}>{data}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="division">Division</label>
                    <select class="form-control" id="d1">
                        {this.sd.arr.map(data => (
                            <option title={data}>{data}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default Sdiv;