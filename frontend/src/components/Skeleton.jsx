import { Skeleton, VStack, Box } from '@chakra-ui/react';
import React, { useState } from "react"
export const SkeletonE = () => {
    return (
        <>
            {
                new Array(21).fill(0).map(el => <Box display="flex" flexDirection="column" gap="10px"   borderRadius="10px">
                    <Skeleton
                        height='240px'
                        borderRadius={"10px 10px 0 0"}
                    />
                    <Skeleton
                        height='50px'
                        borderRadius={"0 0 10px 10px"}
                    />
                </Box>)
            }
        </>
    )
}