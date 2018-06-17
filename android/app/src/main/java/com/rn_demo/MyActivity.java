package com.rn_demo;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class MyActivity extends ReactActivity {

    private ReactContext mReactContext;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);
        //
        mReactContext = ((MainApplication) getApplication()).getReactContext();
    }

    public void sendToRn(View view) {
        mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRn", "安卓主动传递数据给RN");
    }
}
