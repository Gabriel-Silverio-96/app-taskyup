import React, { memo } from "react";
import LoadingView from "./LoadingView";
import { ILoading } from "./types/Loading.component";

const Loading: React.FC<ILoading> = (props) => <LoadingView {...props} />;
export default memo(Loading);
