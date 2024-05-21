/* eslint-disable @next/next/no-img-element */
"use client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { useBooksMutations } from "@components/hooks/useBooksMutations";
import React, { useEffect } from "react";
import PromosPhoto from "@png/promo-photo.png";
import { styles } from "@components/promos/style/Page.style";
import Promo from "@components/promos/PromosBlock";

export default function Page() {
    const { getPromotions, promosInfo } = useBooksMutations();

    useEffect(() => {
        getPromotions();
    }, [getPromotions]);

    const [value, setValue] = React.useState<string>();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    useEffect(() => {
        if (promosInfo) setValue(Object.keys(promosInfo)[0]);
    }, [promosInfo]);

    return (
        <div>
            <div className="promos_header" style={styles.promos_header}>
                <div style={styles.promos_header.imgBox}>
                    <img
                        alt={"promos logo"}
                        src={PromosPhoto.src}
                        width={150}
                        style={styles.promos_header.imgBox.img}
                    />
                </div>
                <div style={styles.promos_header.title}>Акційні пропозиції</div>
            </div>
            {promosInfo && value && (
                <div className="main_content" style={styles.main_content}>
                    <TabContext value={value}>
                        <TabList
                            variant="fullWidth"
                            onChange={(e, newValue) =>
                                handleChange(e, newValue)
                            }
                            TabIndicatorProps={{
                                sx: {
                                    height: "0px",
                                },
                            }}
                            sx={styles.main_content.tabList}>
                            {Object.keys(promosInfo).map((key) => (
                                <Tab
                                    key={key}
                                    label={key}
                                    value={key}
                                    sx={styles.main_content.tabList.tab}
                                />
                            ))}
                        </TabList>

                        {Object.keys(promosInfo).map((key) => (
                            <TabPanel
                                value={key}
                                key={key}
                                sx={styles.main_content.tabPanel}>
                                {promosInfo[key] &&
                                    promosInfo[key].map((promo) => (
                                        <Promo promo={promo} shop={key} key={promo.id} />
                                    ))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </div>
            )}
        </div>
    );
}
