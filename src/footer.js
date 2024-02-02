import { useEffect, useState } from 'react';
import "./assets/scss/footer.scss";

function Footer() {
    const [year, setYear] = useState(2024);

    useEffect(() => {
        
        const currentDate = new Date();
        const yearDate = currentDate.getFullYear();

        setYear(yearDate);
    }, []);


    return (
        <footer>
            <p>今周文化事業(股)公司 / 今周行銷(股)公司 / 今周出版(股)公司 版權所有</p>
            <p>本網站圖文非經本社同意不得刊載</p>
            <p>Copyright © { year } Business Today All rights reserved.</p>
        </footer>
    );
}

export default Footer;
