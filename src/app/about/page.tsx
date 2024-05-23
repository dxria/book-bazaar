/* eslint-disable @next/next/no-img-element */
import { styles } from "@components/aboutpage/style/Page.style";
import { text } from "@constants/about";
import Grid from "@mui/material/Grid";
import AboutPhoto from "@png/about.png";

import React from "react";

export default function page() {
   
    return (
        <div style={{marginBottom:"50px"}}>
            <div className="about_title" style={styles.aboutTitle}>
                Про проект
            </div>
            <div>
                <h3>
                    <i>
                        Ласкаво просимо на наш сайт – ваше універсальне рішення
                        для пошуку книг онлайн!
                    </i>
                </h3>
                <p>
                    Ми створили платформу, яка поєднує зручність, ефективність
                    та вигоду для всіх книголюбів. Дозвольте детальніше
                    розповісти, що ми пропонуємо:
                </p>
            </div>
            <div
                className="about_block"
                style={styles.aboutBlock}>
                <div
                    style={styles.aboutBlock.bulletpoints}>
                    {text.map((point) => (
                        <div key={point.id}>
                            <Grid
                                container
                                spacing={2}
                                sx={{ alignItems: "center" }}>
                                <Grid
                                    item
                                    xs={1}
                                    sx={styles.aboutBlock.bulletpoints.number}>
                                    {point.id}
                                </Grid>
                                <Grid
                                    item
                                    xs={11}
                                    sx={styles.aboutBlock.bulletpoints.title}>
                                    {point.title}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={11}>
                                    {point.desc}
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
                <div style={{ width: "35%" }}>
                    <img alt={"promos logo"} src={AboutPhoto.src} />
                </div>
            </div>
            <div>
                <h3>Наша місія</h3>
                <p>
                    Наша мета – зробити процес пошуку та покупки книг якомога
                    простішим, швидшим і вигіднішим для вас. Ми прагнемо
                    створити спільноту книголюбів, де кожен знайде щось для
                    себе. Незалежно від того, чи ви шукаєте новий бестселер,
                    класичну літературу чи спеціальну акційну пропозицію, наш
                    сайт допоможе вам знайти те, що вам потрібно. Приєднуйтесь
                    до нас, відкривайте для себе нові книги і насолоджуйтесь
                    читанням з легкістю та задоволенням!
                </p>
            </div>
        </div>
    );
}
