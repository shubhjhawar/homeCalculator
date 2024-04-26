import React from 'react';
import { text1, text2, text3, text4 } from '../assets';

const Data = () => {
  return (
    <div className='w-full flex max-md:flex-col justify-evenly gap-3'>
      <img src={text1} alt="text1" className='hidden lg:block absolute left-[160px] top-[400px]'/>
      <img src={text2} alt="text2" className='hidden lg:block absolute right-[140px] top-[800px]'/>
      <img src={text3} alt="text3" className='hidden lg:block absolute left-[130px] top-[1600px]'/>
      <img src={text4} alt="text4" className='hidden lg:block absolute right-[150px] top-[2100px]'/>
      <div className='w-1/2 max-md:w-full flex flex-col items-center gap-5' dir="rtl">
        <div className='border-dashed border border-black flex flex-col gap-5 items-center p-10 mb-4' style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }} >
            <h1 className='underline text-3xl font-semibold'>Do it yourself (DIY)</h1>
            <p className='text-sm text-center'>הנה טיפ פשוט שיכול לעשות את ההבדל הגדול - פרקו והרכיבו את הרהיטים בעצמכם! חברות הובלה רבות גובות תשלום נוסף עבור הובלת רהיטים גדולים ומורכבים, כיוון שהדבר מצריך זמן עבודה נוסף וצוות מיומן.</p>
            <p className='text-sm text-center'>חברות הובלה רבות גובות תשלום נוסף עבור הובלת רהיטים גדולים ומורכבים, כיוון שהדבר מצריך זמן עבודה נוסף וצוות מיומן.</p>
            <h2 className='underline text-xl font-semibold'>יתרונות</h2>
            <div className='flex gap-2'>
                <p className='text-2xl'>1</p>
                <p className='text-right'>חיסכון בעלויות - פירוק והרכבת רהיטים בעצמכם יכולה לחסוך לכם משמעותית בעלויות ההובלה. חברות הובלה רבות גובות בין 100% - 150% נוספים על עלות הובלת הפריט עבור שירותים אלו, ולכן ביצועם באופן עצמאי יכול להוזיל את עלות המעבר כולו.</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>2</p>
                <p className='text-right'>שליטה רבה יותר - פירוק והרכבת רהיטים בעצמכם נותנת לכם שליטה רבה יותר על תהליך ההובלה. אתם יכולים לבחור מתי וכיצד לפרק ולהרכיב את הרהיטים, ולוודא שהדבר נעשה בצורה נכונה ובטוחה.</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>3</p>
                <p className='text-right'>שרידות מעבר - לא כל הרהיטים מסוגלים לשרוד את המעבר בשלום.פירוק והרכבת רהיטים בעצמכם יכולים להיות הזדמנות מצוינת לבחון את מצבם לפני ביצוע פעולות נוספות, ולחסוך לכם עוגמת נפש ואף כסף.</p>
            </div>
            <h2 className='underline text-xl font-semibold mb-5'>ככה עושים את זה!</h2>

            <h3 className='text-xl font-semibold'>חבר שהוא הנדימן</h3>
            <p className='mb-5 text-center'>בקשו עזרה מחברים או בני משפחה פירוק והרכבת רהיטים יכולים להיות קלים יותר עם עזרה נוספת.</p>
            
            <h3 className='text-xl font-semibold'>צפו ותלמדו</h3>
            <p className='mb-5 text-center'>צפו בסרטוני הדרכה באינטרנט ישנם סרטונים רבים באינטרנט המראים כיצד לפרק ולהרכיב סוגים שונים של רהיטים.</p>
            
            <h3 className='text-xl font-semibold'>התחילו בקטנה</h3>
            <p className='mb-5 text-center'>התחילו עם רהיטים קטנים התחילו עם רהיטים קטנים וקלים יותר לפרק ולהרכיב לפני שתעברו לרהיטים גדולים ומורכבים יותר.</p>
        </div>

        <div className='border-[2px] border-dotted border-black rounded-xl flex flex-col gap-5 items-center p-10' style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }}>
            <h1 className='underline text-3xl font-semibold'>ארוז כמו מקצוען</h1>
            <p className='text-sm text-center'>אריזה עצמית של רהיטים וארגזים עשויה להישמע כמו משימה קשה, אך היא יכולה להיות פעילות מהנה ואף משתלמת!</p>
            <h2 className='underline text-xl font-semibold'>יתרונות</h2>
            <div className='flex gap-2'>
                <p className='text-2xl'>1</p>
                <p className='text-right'><span className='font-semibold'>חיסכון משמעותי</span> - אריזה עצמית יכולה  <span className='font-bold'>לחסוך לכם 10%-15%</span> מעלות ההובלה .</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>2</p>
                <p className='text-right'><span className='font-semibold'>סדר וארגון</span> - תהליך האריזה מאפשר לכם לארגן את חפציכם בצורה יעילה, כך שתדעו בדיוק היכן נמצא כל דבר בדירה החדשה.</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>3</p>
                <p className='text-right'><span className='font-semibold'>חוויה משפחתית </span>- הפיכת האריזה לפרויקט משפחתי יכולה להיות פעילות מגבשת ומהנה עבור כל בני הבית.</p>
            </div>

            <h2 className='underline text-xl font-semibold mb-5'>ככה עושים את זה!</h2>

            <h3 className='text-xl font-semibold'>מחפשים חבר שהוא הנדימן</h3>
            <p className='mb-5 text-center'>בקשו עזרה מחברים או בני משפחה פירוק והרכבת רהיטים יכולים להיות קלים יותר עם עזרה נוספת.</p>
            
            <h3 className='text-xl font-semibold'>צופים ולומדים</h3>
            <p className='mb-5 text-center'>צפו בסרטוני הדרכה באינטרנט ישנם סרטונים רבים באינטרנט המראים כיצד לפרק ולהרכיב סוגים שונים של רהיטים.</p>
            
            <h3 className='text-xl font-semibold'>מתחילים בקטנה</h3>
            <p className='mb-5 text-center mb-[135px]'>התחילו עם רהיטים קטנים התחילו עם רהיטים קטנים וקלים יותר לפרק ולהרכיב לפני שתעברו לרהיטים גדולים ומורכבים יותר.</p>
        </div>


      </div>

      <div className='w-1/2 max-md:w-full flex flex-col items-center gap-5' dir="rtl">
      <div className='border-[2px] border-dotted border-black rounded-xl flex flex-col gap-5 items-center p-10 mb-4' style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }}>
        <h1 className='underline text-3xl font-semibold'>גמישות היא מפתח!</h1>
        <p className='text-sm text-center'>
            חברות הובלה רבות מתכננות את לוח הזמנים שלהן מראש, אך ייתכנו 
            <br />
            ביטולים או שינויים ברגע האחרון.זוהי הזדמנות מצוינת עבורכם לחסוך משמעותית בעלויות ההובלה!
        </p>
        <h2 className='underline text-xl font-semibold'>איך זה עובד?!</h2>
        <div className='flex gap-2'>
            <p className='text-2xl'>1</p>
            <p className='text-right'>מילוי חורים בלוח הזמנים - חברות הובלה מעדיפות למלא חורים בלוח הזמנים שלהן <span className='font-bold'>במחיר נמוך עד 20%</span>  מאשר להשאיר עובדים באי-עשייה. הובלה שלכם, גם במחיר מוזל, תסייע להם לנצל את זמן העבודה של צוות ההובלה באופן יעיל יותר.</p>
        </div>
        <div className='flex gap-2'>
            <p className='text-2xl'>2</p>
            <p className='text-right'><span className='font-bold'>חיסכון בעלויות שכר</span> - חברות הובלה משלמות לעובדים שלהן לפי שעה. ביטול הובלה יכול להוביל למצב שבו עובדים יהיו זמינים ללא עבודה. הובלה שלכם במחיר נמוך תאפשר לחברת ההובלה לנצל את זמן העבודה של צוות ההובלה ולהימנע מתשלום שכר מיותר.</p>
        </div>
        <div className='flex gap-2'>
            <p className='text-2xl'>3</p>
            <p className='text-right'><span className='font-bold'>ניצול ימי "שפל"</span>- חברות הובלה רבות נוטות להיות עמוסות בימי ראשון, בסופי שבוע ובחודשי הקיץ. הזמנת הובלה בימים "שפלים" כמו ימי חול או בעונות מעבר יכולה להוזיל את העלויות משמעותית.</p>

        </div>
        
        <h2 className='underline text-xl font-semibold mb-5'>ככה עושים את זה!</h2>

        <h3 className='text-xl font-semibold'>גמישות, גמישות, ועוד פעם גמישות</h3>
        <p className='mb-5 text-center'>היו מוכנים להזיז את תאריך ההובלה בימים ספורים או בשעות לא פופולריות. הזמינות שלכם תגדיל את הסיכוי למצוא מחיר מוזל.</p>
        
        <h3 className='text-xl font-semibold'>מזמינים מראש</h3>
        <p className='mb-5 text-center'>ככל שתזמינו את ההובלה מוקדם יותר, כך גדל הסיכוי למצוא תאריך נוח במחיר מוזל.</p>
        
        <h3 className='text-xl font-semibold'>מתמקחים</h3>
        <p className='mb-5 text-center mb-[70px]'>הציגו את גמישותכם בתאריכים ובזמנים כקלף מיקוח בשיחות עם חברת ההובלה. הבהירו לחברה שאתם מוכנים להזיז את ההובלה בתמורה למחיר מוזל.</p>
      </div>
    
        <div className='border-[2px] border-dotted border-black rounded-xl flex flex-col gap-5 items-center p-10 ' style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }}>

            <h1 className='underline text-3xl font-semibold'>השתתפו במסע</h1>
            <p className='text-sm text-center'>חברות הובלה גובות תשלום נוסף עבור הובלות קשות, כמו הובלות בקומות גבוהות ללא מעלית, הובלות דרך חצרות צרות או הובלות הדורשות נשיאת פריטים למרחק גדול.</p>
            <h2 className='underline text-xl font-semibold'>איך זה עובד?!</h2>
            <div className='flex gap-2'>
                <p className='text-2xl'>1</p>
                <p className='text-right'><span className='font-semibold'></span></p>
                <p className='text-right'><span className='font-semibold'></span><span className='font-bold'></span></p>
                <p className='text-right bg-red-400'><span className='font-semibold'>הוזלת שירותי סבלות</span> - חברות הובלה גובות תשלום נוסף עבור שירותי <span className='font-bold'>15% - מייקרת כל פריט בין 10%</span> סבלות. כל קומה או גישה מורכבת למשאית הורדת פריטים באופן עצמאי יכולה לחסוך את הצורך בשירותי סבלות ובכך להוזיל את עלות ההובלה.</p>

            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>2</p>
                <p className='text-right'><span className='font-semibold'>קיצור זמן ההובלה: - </span>ככל שצוות ההובלה יבלה פחות זמן בנשיאת פריטים, כך זמן ההובלה יהיה קצר יותר והמחיר יהיה נמוך יותר.</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-2xl'>3</p>
                <p className='text-right'><span className='font-semibold'>צמצום הצורך במנופים</span> - במקרים מסוימים, חברות הובלה נדרשות להשתמש במנופים כדי להעלות או להוריד פריטים כבדים. הורדת פריטים באופן עצמאי יכולה לחסוך את הצורך במנופים ובכך להוזיל את העלות של ההובלה.</p>
            </div>

            <h2 className='underline text-xl font-semibold mb-5'>ככה עושים את זה!</h2>

            <h3 className='text-xl font-semibold'>מתכננים מראש</h3>
            <p className='mb-5 text-center'>העריכו אילו פריטים תוכלו להוריד באופן עצמאי ובאילו פריטים תזדקקו לעזרה מצוות ההובלה.</p>
            
            <h3 className='text-xl font-semibold'>משתמשים בעזרים</h3>
            <p className='mb-5 text-center'>השתמשו בעגלות הובלה, גלגלים ומנופים ידניים כדי להקל על הורדת הפריטים.</p>
            
            <h3 className='text-xl font-semibold'>טיפ נוסף</h3>
            <p className='mb-5 text-center'>באותו אופן, ניתן לחסוך כסף גם בעת פריקת הרהיטים בדירה החדשה. העלאת פריטים באופן עצמאי יכולה להוזיל את העלות של ההובלה.</p>

        </div>
      </div>
    </div>
  );
};

export default Data;