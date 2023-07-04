
type RandomNumberType ={
        value:number
    }

type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
  };
  
  type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
  };
  
  type ZeroNumber = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
  };


  type RandomNumberProps= PositiveNumber | NegativeNumber | ZeroNumber 
  export const RandomNumber = ({ value, isNegative, isPositive, isZero }: RandomNumberProps) => {
    return (
      <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
      </div>
    );
  };
  