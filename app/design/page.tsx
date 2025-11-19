import styles from "./page.module.css";

function Frame2Design() {
  return (
    <div className={styles.frame2}>
      <img src="/design/Israel Museum Logo.png" alt="Israel Museum Logo" className={styles.frame2Image}/>
      <p className={styles.mainTitle}>אנסמבל</p>
    </div>
  );
}

function TwoTextsAfterFrame2Design() {
  return (
    <div className={styles.twoTextsAfterFrame2}>
      <p className={styles.secondTitle}>אפליקציית הכרויות בין אמנים ואוצרים מטעם מוזיאון ישראל. הפלטפורמה מייצרת חיבורים והזדמנויות חדשות על מנת להקל על תהליך האוצרות במוזיאון. אופציה נוספת שקיימת באפליקציה היא שיתופי פעולה בין אמנים.</p>
      <p className={styles.grayTextTitle}>:<strong>מתכנתים</strong></p>
      <p className={styles.grayText}>נוי ביתן, מעין מימון, שירה ברקוביץ, רפאל סבון.</p>
      <p className={styles.grayTextTitle}>:<strong>מעצבים</strong></p>
      <p className={styles.grayText}>טל לנגזם, שני דודוביץ, אגניו טגניה, מאי מינה.</p>
      <p className={styles.grayTextTitle}>:<strong>יועצים חיצוניים</strong></p>
      <p className={styles.grayText}>צוות המוזיאון, האוצר הבכיר של מוזיאון ישראל. עומר זיו ואורי סוכרי - מעצבי ux בכירים.</p>
    </div>
  );
}

function SubstractDesign() {
  return (
    <div className={styles.substractDesign}>
      <div className={styles.rectangleSubstract}>
      </div>
      <div className={styles.ellipse}>
      </div>
    </div>
  );
}

function TextAfterSubstractDesign() {
  return (
    <div className={styles.textAfterSubstract}>
      <p className={styles.secondTitle}>רקע מניעים ומטרות</p>
      <p className={styles.regularOblic}>תהליך האוצרות במוזיאון ישראל הוא תהליך ארוך ולעיתים מייגע, אינטואיטיבי ומפוזר, מתבסס בעיקר על היכרות אישית וקשרים. האוצרים במוזיאון נדרשים לעבור דרך מאגרי עבודות, אתרים שונים וחיפוש רחב כדי למצוא חיבורים בין אמנים ליצירות. במקביל, יוצרים רבים רוצים לחשוף את היצירות שלהם על מנת להגיע למוזיאון בהקשרים רלוונטיים, אבל קשה להם להגיע לאוצרים וליצור איתם קשר.</p>
      <p className={styles.regularOblicBold}>המטרה שלנו היא להשיג חיבור בין אוצרים ויוצרים פעילים על בסיס חומר חזותי והתאמה אישית.</p>
      <p className={styles.regularOblic}>האפליקציה היא מטעם מוזיאון ישראל, ייעודית ונגישה במיוחד לאנשי אמנות ועיצוב על מנת לאפשר הזדמנויות ושיתופי פעולה.</p>
    </div>
  );
}

function UnionDesign() {
  return (
    <div className={styles.unionDesign}>
      <div className={styles.polygon}>
      </div>
      <div className={styles.rectangleUnion}>
      </div>
    </div>
  );
}

function TextAfterUnionDesign() {
  return (
    <div className={styles.textAfterUnionDesign}>
      <p className={styles.secondTitle}>קהל היעד וקונטקסט השימוש</p>
      <ul className={styles.regularBullet}> 
        <li className={styles.regularOblicBullet}>אוצרים ואוצרות של מוזיאון ישראל ומוסדות נוספים.</li>
        <li className={styles.regularOblicBullet}>אמנים ויוצרים פעילים: אמנים, בוגרי בתי ספר לאומנות, סטודנטים לאמנות, יוצרים חזותיים עצמאיים, סטודיואים וכו’.</li>
        <li className={styles.regularOblicBullet}>המוצר ישרת את האוצרים והאוצרות לשימוש תקופתי בעת עבודה על הכנת תערוכות, ואת האמנים ישרת גם לשימוש יומיומי בחיפוש אחר פלטפורמה להצגת העבודות שלהם ולשיתופי פעולה.</li>
      </ul>
      <p className={styles.regularOblic}><strong>מגבלות או דרישות נוספות:</strong> תמיכה טכנית בהעלאת קבצים כבדים כמו וידיאו באיכות טובה, נגישות מיוחדת למשתמשים מבוגרים, ליצור הסבר על מושגים בעולם האוצרות על מנת להפוך את החוויה של האמנים לקלה יותר.</p>
    </div>
  );
}

function Frame4Design() {
  return (
    <div className={styles.frame4}>
      <img src="/design/Screenshot.png" alt="App Visualtization" className={styles.frame4Image}/>
    </div>
  );
}

function TextAfterFrame4Design() {
  return (
    <div className={styles.textAfterFrame4}>
      <p className={styles.secondTitle}>מה אנחנו בונים?</p>
      <p className={styles.regularOblic}>אנחנו בונים פלטפורמה אינטראקטיבית מבוססת סוויפים(“ימינה / שמאלה”) שמייצרת חיבורים אמנותיים בין יוצרים לאוצרים.</p>
      <p className={styles.regularOblic}>פיצ’רים עיקריים:</p>
      <ul className={styles.boldBullet}>
        <li className={styles.regularOblicBulletBold}><strong>פרופיל משתמש</strong> (אמן / אוצר) - כולל עבודות, תיאור קצר ותגיות נושאיות.</li>
        <li className={styles.regularOblicBulletBold}>פיד מבוסס על <strong>אלגוריתם התאמה</strong> - האפליקציה מציגה עבודות בהתאם לתחומי עניין ונושאים נבחרים.</li>
        <li className={styles.regularOblicBulletBold}> <strong>סוויפים</strong> (Match System) - ימינה = אהבתי / רלוונטי, שמאלה = לא מתאים.</li>
        <li className={styles.regularOblicBulletBold}> <strong>מאצ’ הדדי</strong> - אם גם הצד השני מאשר, נפתחת אפשרות לצ׳אט או יצירת קשר:</li>
          <ul className={styles.subBullet}>
            <li className={styles.regularOblicBullet}>אומן מול אומן - במקביל לבאמבל BFF, שני הצדדים יכולים לפתוח שיחה לאחר המאצ’.</li>
            <li className={styles.regularOblicBullet}>אומן מול אוצר - לאחר האישור, רק האוצר יכול לפתוח שיחה, למטרה עסקית.</li>
          </ul>
        <li className={styles.regularOblicBulletBold}> <strong>עמוד לייקים</strong> - אוצרים יכולים לאגור פרופילים רלוונטיים שאהבו למרחב עבודה חזותי.</li>
        <li className={styles.regularOblicBulletBold}><strong>העדפות</strong> - המשתמש יכול להוסיף תיוגים בפרופיל שלו, וכך המחפשים יוכלו לבצע סינון מתקדם לפי גיל, תחום אומנותי ועוד קטגוריות שונות.</li>
      </ul>
    </div>
  );
}

function UnionDesign2() {
  return (
    <div className={styles.unionDesign2}>
      <div className={styles.polygon2}>
      </div>
     <div className={styles.polygon3}>
      </div>
    </div>
  );
}

function TextAfterUnionDesign2() {
  return (
    <div className={styles.textAfterUnionDesign2}>
      <p className={styles.secondTitle}>מה אנחנו <strong>לא</strong> בונים?</p>
      <p className={styles.regularOblic}>אנחנו לא רשת חברתית פתוחה או פיד ציבורי (אין עוקבים או פוסטים).
בנוסף, האפליקציה היא אינה פלטפורמת מכירה של אמנות. האפליקציה היא רק כלי עבור בעלי המקצוע הרלוונטיים בלבד, ולא למטרות צפייה באומנות. האפליקציה לא מציגה מאגר קבוע של עבודות מטעם מוזיאון ישראל, העבודות המוצגות הן עבודות מטעמם של המשתמשים בלבד.</p>
    </div>
  );
}

function RectangleBeforeEnd() {
  return (
    <div className={styles.rectangleBeforeEnd}>
    </div>
  );
}

function LastText() {
  return (
    <div className={styles.lastText}>
      <p className={styles.secondTitle}>דרישות או מגבלות טכניות</p>
      <ul className={styles.regularBullet}> 
        <li className={styles.regularOblicBullet}>ניהול תוכן: נדרש ממשק ניהול למוזיאון או לצוות האפליקציה לאישור תכנים.</li>
        <li className={styles.regularOblicBullet}>אבטחת מידע: יש להגן על זכויות יוצרים ועל נתונים אישיים. הדרישה להגן על זכויות יוצרים ועל נתונים אישיים היא דרישה טכנית. אפשר להימנע מכך באמצעות אישור ויתור זכויות ברישום לאפליקציה או באמצעות מנגנונים למניעת הורדה קלה של תמונות.</li>
      </ul>
      <p className={styles.regularOblicBold}>בעיות:</p>
      <ul>
        <li className={styles.regularOblicBullet}>פרסום והפצת הפלטפורמה - קושי בגיוס אמנים ואוצרים שיאמצו את הפלטפורמה בהתחלה.</li>
        <li className={styles.regularOblicBullet}>סוגיית זכויות יוצרים והעלאת עבודות רגישות.</li>
      </ul>
      <p className={styles.regularOblicBold}>סכנות:</p>
      <p className={styles.regularOblic}>חוסר איזון בין כמות האוצרים לכמות האמנים.</p>
      <p className={styles.regularOblic}>דרכי התמודדות:</p>
      <p className={styles.regularOblic}>שיתוף פעולה עם מוזיאון ישראל כשותף השקה אמין. ובניית חוויית שימוש שמדגישה ערך מקצועי (לא רק מאצ’ים אלא גם תהליך עבודה אמיתי).</p>
      <p className={styles.regularOblicBold}>שאלות פתוחות:</p>
      <p className={styles.regularOblic}>איך בדיוק ייראה התהליך שאחרי מאצ’? (צ׳אט בלבד או גם כלים לעבודה משותפת?)</p>
      <p className={styles.regularOblic}>איך נמדוד הצלחה? לפי כמות חיבורים שנוצרו או לפי פרויקטים שהתגבשו?</p>
      <p className={styles.regularOblic}>האם יידרש מודל כלכלי כלשהו (מנוי, תמיכה מוסדית וכו’)?</p>     
    </div>
  );
}

export default function DesignPage() {
  return (
    <div className={styles.frame7}>
      <Frame2Design />
      <TwoTextsAfterFrame2Design />
      <SubstractDesign />
      <TextAfterSubstractDesign />
      <UnionDesign />
      <TextAfterUnionDesign />
      <Frame4Design />
      <TextAfterFrame4Design />
      <UnionDesign2 />
      <TextAfterUnionDesign2 />
      <RectangleBeforeEnd />
      <LastText />
    </div>
  );
}