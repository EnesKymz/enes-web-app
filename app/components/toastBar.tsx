"use client"

import { Toaster,ToastBar } from "react-hot-toast"

export default function ToasterComponent(){
    return(
        <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? 'custom-enter 1s ease'
                : 'custom-exit 1s ease forwards',
            }}
          />
        )}
        </Toaster>
    )
}