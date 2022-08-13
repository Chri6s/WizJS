export class Vector {
    constructor(...components) {
        this.components = components;
    }
     vecDot({ components }) {            
        //return parseFloat(parseFloat(a) * parseFloat(b));
        return components.reduce((acc, component, index) => acc + component * this.components[index], 0)
    }
     vecLenSq() {
        return new Vector(
            this.vecDot(this, this)
        )
    }
     vecLen() {
        var vecLen = Math.hypot(...this.components)
        if( Math.sqrt(vecLen) > Math.E) {
            return parseFloat(vecLen);
        } else {
            return 0;
        }
    }
     vecAdd({components})  {
        return new Vector(
            ...components.map((component, index) => this.components[index] + component)
        );
    }
     vecSub({components})  {
        return new Vector(
            ...components.map((component, index) => this.components[index] - component)
          )
    }
     vecMul(sca)  {
        return new Vector(
            ...this.components.map(component => component * sca)
          )
    }
     vecInt()  {
        return new Vector(
            ...this.components.map(component => Math.round(component))
          )
    } 
     vecNormalize()  {
        return this.scaleBy(1 / this.length())
    }
     vecFormat(vec)  {
        return toString(vec);
    }
     vecFromAngle(angle)  {
        return new Vector(
            Math.cos(angle), Math.sin(angle)
          )
    }
}


// export default {vecAdd, vecDot, vecLenSq, vecLen, vecSub, vecMul, vecInt, vecNormalize, vecFormat, vecFromAngle}