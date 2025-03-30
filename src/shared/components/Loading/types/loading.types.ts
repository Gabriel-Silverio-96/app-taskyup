import { CircularProgressProps } from "@mui/material";

export interface ILoading extends CircularProgressProps {
    isLoading: boolean;
    backdrop?: boolean;
    message?: string;
}