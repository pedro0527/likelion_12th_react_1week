import {useState, useEffect} from "react";

function UseEffectCounter(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('렌더링 완료! count의 값은 ${count}입니다.');
    });
    return (
        <>
            <p>이번에 useEffect를 이용한 카운터지롱! {count} 번 클릭했다!</p>
            <button onClick={() => setCount(count + 1)}>나를 눌러보세용❤️</button>
        </>
    );
}
export default UseEffectCounter;